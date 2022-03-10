import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TasksModule } from './tasks.module';
import { MongooseModule } from '@nestjs/mongoose';

describe('TasksController', () => {
  let controller: TasksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
			imports: [TasksModule, MongooseModule.forRoot('mongodb://database3/Tasks')],
      controllers: [TasksController],
			components: [TasksService]
    }).compile();

		TasksService = module.get<TasksService>(TasksService);
    controller = module.get<TasksController>(TasksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
