const Demo = {
    state() {
        return {
            count: 0
        }
    },
    mutations: {
        increment(state) {
            //获取状态对象
            state.count++;
        }
    },
    actions: {
        increment(context) {
            //触发状态变更
            context.commit('increment');
        }
    },
    getters: {

    }
}

export default Demo