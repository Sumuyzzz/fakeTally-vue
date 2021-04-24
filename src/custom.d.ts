type RootState = {
  recordList: RecordItem[];
  tagList: Tag[];
  currentTag?: Tag;
}

type RecordItem = {
  tags: Tag[];
  notes: string;
  type: string;
  amount: number;
  createdAt?: string;
};

type Tag = {
  id: string;
  name: string;
}
type TagListModel = {
  data: Tag[];
  fetch: () => tag[];
  create: (name: string) => 'success' | 'duplicated';
  updated: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
  save: () => void;
  remove: (id: string) => boolean;
}
interface Window {
  store: {
    recordList: RecordItem[];
    tagList: tag[];
    createTag: (name: string) => void;
    removeTag: (id: string) => boolean;
    updateTag: (id: string, name: string) => 'success' | 'not found' | 'duplicated';//也可以tagListModel['updated']
    findTag: (id: string) => Tag;
    createRecord: (record: RecordItem) => void;
  };
}