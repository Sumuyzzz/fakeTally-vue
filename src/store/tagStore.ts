const tagStore = {
    tagList: [] as Tag[],
    removeTag(id: string) {
        let index = -1;
        for (let i = 0;i < this.tagList.length;i++) {
            if (this.tagList[i].id === id) {
                index = i;
                break;
            }
        }
        this.tagList.splice(index, 1);
        return true;
    },
    updateTag(id: string, name: string) {
        const idList = this.tagList.map(item => item.id);
        if (idList.indexOf(id) >= 0) {
            const names = this.tagList.map(item => item.name);
            if (names.indexOf(name) >= 0) {
                return 'duplicated';
            } else {
                const tag = this.tagList.filter(item => item.id === id)[0];
                tag.name = name;
                // this.saveTags();
                return 'success';
            }
        } else {
            return 'not found';
        }
    },
};

// tagStore.fetchTags();

export default tagStore;