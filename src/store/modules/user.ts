const ModuleUser = {
  state: {
    token: '',
  },
  mutations: {
    setToken(state: { token: any }, token: any) {
      state.token = token;
    },
  },
  actions: {
  },
  getters: {
    getToken(state: any) {
      return state.token;
    },
  },
};

export default ModuleUser;
