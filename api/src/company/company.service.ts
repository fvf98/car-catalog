import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCompanyDto, EditCompanyDto } from './dtos';
import { Company } from './entities';

@Injectable()
export class CompanyService {

    constructor(
        @InjectRepository(Company)
        private readonly companyRepository: Repository<Company>
    ) { }

    async list() {
        return await this.companyRepository.find();
    }

    async get(id: number) {
        const company = await this.companyRepository.findOne(id);
        if (!company) throw new NotFoundException('Compañia no encontrada');

        return company;
    }

    async insert(dto: CreateCompanyDto) {
        const companyExist = await this.companyRepository.findOne({ name: dto.name });
        if (companyExist) throw new BadRequestException('Ya existe una compañia con este nombre');

        const newCompany = this.companyRepository.create(dto);
        const company = await this.companyRepository.save(newCompany);

        return company;
    }

    async update(id: number, dto: EditCompanyDto) {
        const company = await this.get(id);
        const editedCompany = Object.assign(company, dto);
        return await this.companyRepository.save(editedCompany);
    }

    async upDownCompany(id: number) {
        const company = await this.get(id);
        company.status = !company.status;
        return await this.companyRepository.save(company);
    }
}
