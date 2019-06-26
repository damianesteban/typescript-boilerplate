import { Object } from 'ts-toolbelt';

interface TestObject {
  name: string;
  count: number;
  words: string[];
}

type Merged = Object.Merge<TestObject, { isNice: true }>;
