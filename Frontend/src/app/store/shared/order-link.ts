/**
 * Codec del enlace de pedido. El mensaje de WhatsApp NO lleva precios (es texto
 * editable por el cliente); en su lugar adjunta un token corto que apunta a la
 * página `/orden/:token`. El token solo guarda **referencias** (slug del producto,
 * id de variante y cantidad): los precios reales se resuelven en la página desde
 * el catálogo, de modo que el enlace representa el valor real del pedido y no es
 * manipulable como el texto del chat.
 *
 * Se usa base64url para que el enlace se vea opaco y sea apto para URL.
 */

/** Una línea del pedido codificada en el token. */
export interface OrderLinkItem {
  slug: string;
  variantId: string;
  qty: number;
}

/** Codifica las líneas del pedido en un token base64url. */
export function encodeOrder(items: OrderLinkItem[]): string {
  const compact = items.map((i) => [i.slug, i.variantId, i.qty]);
  return toBase64Url(JSON.stringify(compact));
}

/** Decodifica un token. Devuelve `null` si está corrupto o vacío. */
export function decodeOrder(token: string): OrderLinkItem[] | null {
  if (!token) {
    return null;
  }
  try {
    const parsed = JSON.parse(fromBase64Url(token)) as unknown;
    if (!Array.isArray(parsed)) {
      return null;
    }
    const items: OrderLinkItem[] = [];
    for (const row of parsed) {
      if (!Array.isArray(row) || row.length < 3) {
        continue;
      }
      const [slug, variantId, qty] = row as [unknown, unknown, unknown];
      const n = Number(qty);
      if (typeof slug !== 'string' || typeof variantId !== 'string' || !Number.isFinite(n) || n <= 0) {
        continue;
      }
      items.push({ slug, variantId, qty: Math.floor(n) });
    }
    return items.length ? items : null;
  } catch {
    return null;
  }
}

// ----------------------------- base64url (SSR-safe) -----------------------------

function toBase64Url(str: string): string {
  return base64Encode(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function fromBase64Url(token: string): string {
  let b64 = token.replace(/-/g, '+').replace(/_/g, '/');
  const pad = b64.length % 4;
  if (pad) {
    b64 += '='.repeat(4 - pad);
  }
  return base64Decode(b64);
}

/** Codifica a base64 de forma segura para Unicode (btoa existe en navegador y Node 16+). */
function base64Encode(str: string): string {
  const bytes = encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (_, hex) =>
    String.fromCharCode(parseInt(hex, 16)),
  );
  return btoa(bytes);
}

function base64Decode(b64: string): string {
  const bytes = atob(b64)
    .split('')
    .map((c) => '%' + c.charCodeAt(0).toString(16).padStart(2, '0'))
    .join('');
  return decodeURIComponent(bytes);
}
