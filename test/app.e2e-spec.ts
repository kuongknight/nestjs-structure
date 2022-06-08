import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppFactory } from '../src/app';

describe('AppController Full modules', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const AppModule = AppFactory.create();
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  it('/users (GET)', () => {
    return request(app.getHttpServer()).get('/users').expect(200);
  });
  it('/auth/local/login (POST)', () => {
    return request(app.getHttpServer())
      .post('/auth/local/login')
      .send({ email: 'test@test.com', password: 'test' })
      .expect(201);
  });

  it('/users (POST) wrong vatID', () => {
    return request(app.getHttpServer())
      .post('/users')
      .send({
        email: 'test@test.com',
        password: 'test',
        name: 'test',
        invoiceType: 'T',
        vatID: '12345',
      })
      .expect(400);
  });

  it('/users (POST) good vatID', () => {
    return request(app.getHttpServer())
      .post('/users')
      .send({
        email: 'test@test.com',
        password: 'test',
        name: 'test',
        invoiceType: 'T',
        vatID: '1234',
      })
      .expect(201);
  });
});

describe('AppController Auth Only', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const AppModule = AppFactory.create(['AuthModule']);
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  it('/auth/local/login (POST)', () => {
    return request(app.getHttpServer())
      .post('/auth/local/login')
      .send({ email: 'test@test.com', password: 'test' })
      .expect(201);
  });

  it('/users (GET)', () => {
    return request(app.getHttpServer()).get('/users').expect(404);
  });
});
