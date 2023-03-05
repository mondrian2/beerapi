import { Injectable } from '@nestjs/common';
import { CreateCommandDto } from './dto/create-command.dto';
import { UpdateCommandDto } from './dto/update-command.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Command } from './schemas/commands.schema';
import { CommandsDocument } from './schemas/commands.schema';

@Injectable()
export class CommandsService {
  constructor(
    @InjectModel(Command.name) private commandModel: Model<CommandsDocument>,
  ) {}

  async create(createCommandDto: CreateCommandDto) {
     const createdCommands = new this.commandModel(createCommandDto);
     return createdCommands.save();
  }

  findAll() {
    return this.commandModel.find().exec();
  }

  findOne(id: number) {
    return this.commandModel.findById(id).exec();
  }

  update(id: number, updateCommandDto: UpdateCommandDto) {
    return `This action updates a #${id} command`;
  }

  remove(id: number) {
    return `This action removes a #${id} command`;
  }
}
