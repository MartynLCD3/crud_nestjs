import { CreateTaskDto } from './dto/create-task.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './interfaces/Task';
import { Model } from 'mongoose';

@Injectable()
export class TasksService {
  constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) {}

  async getTasks() {
    return await this.taskModel.find();
  }

  async getTask(id: string) {
    return this.taskModel.findById(id);
  }

  async createTask(task: CreateTaskDto) {
    const newTask = new this.taskModel(task);
    return await newTask.save();
  }

  async deleteTask(id: string) {
    await this.taskModel.deleteOne({ _id: id });
  }

  async updateTask(id: string, task: CreateTaskDto) {
    await this.taskModel.updateOne({ _id: id }, { $set: task });
  }
}
