import {createStore} from 'redux';

const initialStore = {
    counters: []
}

export const addCounter = () => {
    return {
        type: 'ADD_COUNTER',
    }
}

export const increase = (index) => {
    return {
        type: 'INCREASE',
        index: index,
    }
}

export const decrease = (index) => {
    return {
        type: 'DECREASE',
        index: index,
    }
}

export const delCounter = (index) => {
    return {
        type: 'DEL_COUNTER',
        index: index,
    }
}

const reducer = (store = initialStore, action) => {
  switch (action.type) {
      case 'ADD_COUNTER': {
          const newCounters = [...store.counters]
          newCounters.push({
              created: new Date().toLocaleString(),
              modified: new Date().toLocaleString(),
              count: 0,
          })
          return {
              counters: newCounters
          };
      }
      case 'INCREASE': {
          const newCounters = store.counters.map((counter, index) => {
            if (action.index === index) {
              return {
                created: counter.created,
                modified: new Date().toLocaleString(),
                count: counter.count + 1
              }
            }
            return counter
      })
      return {
          counters: newCounters,
      }
    }
    case 'DECREASE': {
        const newCounters = store.counters.map((counter, index) => {
          if (action.index === index) {
            return {
              created: counter.created,
              modified: new Date().toLocaleString(),
              count: counter.count - 1
            }
          }
          return counter
    })
    return {
        counters: newCounters,
    }
    }
    case 'DEL_COUNTER': {
        
            const newCounters = store.counters.filter((counter, index) => {
              if (action.index === index) {
                return false
              }
              return true
            })
            return {
                counters: newCounters
              }
            
    }
      default:
          return store;
    }
}

export const store = createStore(reducer)