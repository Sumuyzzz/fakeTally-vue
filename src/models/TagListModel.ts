import createId from '@/lib/idCreator';

const localStorageKeyName = 'tagList'
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
const tagListModel: tagListModel = {
    data: [],
    fetch() {
        this.data=JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
        return this.data;
    },
    create(name){
        const names=this.data.map(item =>item.name)
        if(names.indexOf(name) >= 0){return 'duplicated'} 
        const id=createId().toString();
        this.data.push({id,name:name});
        this.save();
        return 'success';
    },

    updated(id,name) {
        const idList = this.data.map(item=>item.id);
        if(idList.indexOf(id) >=0){
          const names =this.data.map(item =>item.name)
          if(names.indexOf(name) >= 0){
              return 'duplicated'
            }else{
                const tag=this.data.filter(item =>item.id===id)[0];
                tag.name = name;
                this.save();
                return 'success'
        }
        }else{
            return 'not found'
        }
    },
remove(id: string){
   let index = -1;
   for(let i =0;i<this.data.length;i++){
       if( this.data[i].id === id){
       index = i;
       break;
       }
   }
   this.data.splice(index, 1)//参数index为删除的起始点,删除个数为1
   this.save()
   return true;
},
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    }
}

export  default tagListModel