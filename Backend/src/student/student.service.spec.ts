import { Test, TestingModule } from '@nestjs/testing';
import { studentService } from './student.service';

describe('studentService', () => {
  let service: studentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [studentService],
    }).compile();

    service = module.get<studentService>(studentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
