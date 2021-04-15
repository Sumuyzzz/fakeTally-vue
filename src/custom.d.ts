type RecordItem = {
    tags: string[];
    notes: string;
    type: string;
    amount: number;
    createdAt?: Date;
   
  };

  type tag ={
    id: string;
    name: string;
}
  type tagListModel={
    data: tag[];
    fetch: () => tag[];
    create: (name: string) => 'success'|'duplicated';
    updated: (id: string,name: string) => 'success'|'not found'|'duplicated';
    save: () => void; 
    remove: (id: string) => boolean;
}
  interface Window{
    tagList: tag[];
    createTag: (name: string) => void;
  }