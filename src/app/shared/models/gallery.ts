export class Gallery {
    _id!: string;
    partnerId!: string;
    categoryId!: string;
    date!: string;
    name!: string;
    slug!: string;
    scenes?: Array<{
      _id: number;
      name: string;
      filesCount: number;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      files?: string[];
    }>;
    filesCount!: number;
  }