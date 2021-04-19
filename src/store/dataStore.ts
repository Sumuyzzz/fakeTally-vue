import recordStore from "./recordStore"
import tagStore from "./tagStore"


const oldStore={
  ...recordStore,
  ...tagStore
}

export default oldStore;