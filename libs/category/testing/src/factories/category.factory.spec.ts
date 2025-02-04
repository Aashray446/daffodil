import { TestBed } from '@angular/core/testing';

import { DaffCategory } from '@daffodil/category';

import { DaffCategoryFactory } from './category.factory';

describe('Category | Testing | Factories | DaffCategoryFactory', () => {

  let categoryFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCategoryFactory],
    });

    categoryFactory = TestBed.inject(DaffCategoryFactory);
  });

  it('should be created', () => {
    expect(categoryFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffCategory;

    beforeEach(() => {
      result = categoryFactory.create();
    });

    it('should return a Category with all required fields defined', () => {
      expect(result.id).toBeDefined();
      expect(result.url).toBeDefined();
      expect(result.canonicalUrl).toBeDefined();
      expect(result.name).toBeDefined();
      expect(result.description).toBeDefined();
      expect(result.meta_title).toBeDefined();
      expect(result.meta_description).toBeDefined();
      expect(result.children_count).toBeDefined();
      expect(result.total_products).toBeDefined();
      expect(result.product_ids).toBeDefined();
      expect(result.breadcrumbs).toBeDefined();
    });
  });

  describe('createMany', () => {
    let result: DaffCategory[];

    it('should create as many categories as desired', () => {
      result = categoryFactory.createMany(2);
      expect(result.length).toEqual(2);

      result = categoryFactory.createMany(3);
      expect(result.length).toEqual(3);
    });
  });
});
