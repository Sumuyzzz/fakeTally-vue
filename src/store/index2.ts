import tagListModel from '@/models/TagListModel'
import recordListModel from '@/models/RecordListModel'



const store={
recordList:recordListModel.fetch(),
createRecord:(record: RecordItem)=>recordListModel.create(record),

tagList:tagListModel.fetch(),
findTag:(id: string)=>{
 return store.tagList.filter(t => t.id === id)[0];
},
createTag:(name: string)=>{
  const message = tagListModel.create(name);
    if (message === "duplicated") {
      window.alert("标签名重复");
    } else if (message === "success") {
      window.alert("成功");
    }
},
removeTag:(id: string)=>{
  return tagListModel.remove(id);
},
updateTag:(id: string,name: string)=>{
  return tagListModel.updated(id, name);
}
}

export default store