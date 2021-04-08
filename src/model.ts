const localStorageKeyName = 'recordList'
const model = {
    fetch() {
        return JSON.parse(window.localStorage.getItem('recordList') || '[]')as RecordItem[];
    },
    save(data: RecordItem[]) {
        window.localStorage.setItem('recordList', JSON.stringify(data));
    }
}

export   {model} 