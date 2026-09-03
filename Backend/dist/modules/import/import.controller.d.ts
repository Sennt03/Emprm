import { StreamableFile } from '@nestjs/common';
import { ProductQueryDto } from '../products/dto/product-query.dto';
import { CategoryImportService } from './category-import.service';
import { ExportService } from './export.service';
import { ImageImportService } from './image-import.service';
import { ImportJobsQueryDto, ImportRowsQueryDto } from './dto/import-jobs-query.dto';
import { ImportJobsService } from './import-jobs.service';
import { ImportWorkerService } from './import-worker.service';
import { ProductImportService } from './product-import.service';
import { TemplateService } from './template.service';
export declare class ImportController {
    private readonly jobs;
    private readonly worker;
    private readonly productImport;
    private readonly categoryImport;
    private readonly imageImport;
    private readonly templates;
    private readonly exporter;
    constructor(jobs: ImportJobsService, worker: ImportWorkerService, productImport: ProductImportService, categoryImport: CategoryImportService, imageImport: ImageImportService, templates: TemplateService, exporter: ExportService);
    previewProducts(file: Express.Multer.File): Promise<import("./import.types").ImportPreview>;
    importProducts(file: Express.Multer.File, userId: string): Promise<{
        jobId: string;
    }>;
    previewCategories(file: Express.Multer.File): Promise<import("./import.types").ImportPreview>;
    importCategories(file: Express.Multer.File, userId: string): Promise<{
        jobId: string;
    }>;
    importImages(file: Express.Multer.File, userId: string): Promise<{
        jobId: string;
    }>;
    history(query: ImportJobsQueryDto): Promise<import("../../common/interfaces/paginated-result.interface").PaginatedResult<{
        id: string;
        type: import(".prisma/client").$Enums.ImportJobType;
        originalName: string;
        filePath: string;
        status: import(".prisma/client").$Enums.ImportJobStatus;
        totalRows: number;
        processedRows: number;
        successCount: number;
        errorCount: number;
        createdCount: number;
        updatedCount: number;
        message: string | null;
        userId: string | null;
        createdAt: Date;
        startedAt: Date | null;
        finishedAt: Date | null;
    }>>;
    job(id: string): Promise<{
        id: string;
        type: import(".prisma/client").$Enums.ImportJobType;
        originalName: string;
        filePath: string;
        status: import(".prisma/client").$Enums.ImportJobStatus;
        totalRows: number;
        processedRows: number;
        successCount: number;
        errorCount: number;
        createdCount: number;
        updatedCount: number;
        message: string | null;
        userId: string | null;
        createdAt: Date;
        startedAt: Date | null;
        finishedAt: Date | null;
    }>;
    rows(id: string, query: ImportRowsQueryDto): Promise<import("../../common/interfaces/paginated-result.interface").PaginatedResult<{
        id: string;
        status: import(".prisma/client").$Enums.ImportRowStatus;
        message: string | null;
        jobId: string;
        rowNumber: number;
        identifier: string | null;
        action: import(".prisma/client").$Enums.ImportRowAction;
        rawData: import("@prisma/client/runtime/library").JsonValue | null;
    }>>;
    errors(id: string): Promise<StreamableFile>;
    columns(type: string): import("./import.constants").ColumnDef[];
    templateProducts(): Promise<StreamableFile>;
    templateCategories(): Promise<StreamableFile>;
    exportProducts(query: ProductQueryDto): Promise<StreamableFile>;
    exportCategories(): Promise<StreamableFile>;
    private startJob;
    private assertFile;
    private xlsx;
}
