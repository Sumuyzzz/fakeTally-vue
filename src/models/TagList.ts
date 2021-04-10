const localStorageKeyName = 'tagList'
type tag ={
    id: string;
    name: string;
}
type tagListModel={
    data: tag[];
    fetch: () => tag[];
    create: (name: string) => 'success'|'duplicated';
    save: () => void; 
}
const tagListModel: tagListModel = {
    data: [],
    fetch() {
        this.data=JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
        return this.data;
    },
    create(name: string){
        const names=this.data.map(item =>item.name)
        if(names.indexOf(name) >= 0){return 'duplicated'}
        this.data.push({id: name,name: name});
        this.save();
        return 'success';
    },
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    }
}

export  default tagListModel