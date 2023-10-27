import api from '../../api';




const dataProvider = {
  getList: async (resource, params) => {
    let response;
    try {
        if (resource === 'comment' && params.filter && params.filter.workId) {
            response = await api.get(`/${resource}/${params.filter.workId}`);
        } 
        else if (resource === 'work') {
            if (params.filter && params.filter.labelId) {
                response = await api.get(`/work/byLabel/${params.filter.labelId}`);
            } else {
                response = await api.get(`/${resource}`);
            }
        } else {
            response = await api.get(`/${resource}`);
        }
        console.log("Data from API:", response.data); 
        return { data: response.data, total: response.data.length };
    } catch (error) {
        console.error(`Erreur lors de la récupération des ${resource}:`, error);
        throw error;
    }
},
  getOne: async (resource, params) => {
    try {
      const response = await api.get(`/${resource}/${params.id}`);
      return { data: response.data };
    } catch (error) {
      console.error(`Erreur lors de la récupération de l'élément ${resource}:`, error);
      throw error;
    }
  },
  create: async (resource, params) => {
    const url = resource === 'work' ? `/${resource}/addWork` : `/${resource}/add${resource.charAt(0).toUpperCase() + resource.slice(1)}`;
    try {
      const response = await api.post(url, params.data);
      return { data: response.data };
    } catch (error) {
      console.error(`Erreur lors de la création d'un ${resource}:`, error);
      throw error;
    }
  },
  update: async (resource, params) => {
    try {
      console.log(params.data, "***LES LABELS***")
      const response = await api.patch(`/${resource}/${params.id}`, params.data);
      

      return { data: response.data };
    } catch (error) {
      console.error(`Erreur lors de la mise à jour d'un ${resource}:`, error);
      throw error;
    }
  },
  delete: async (resource, params) => {
    try {
      const response = await api.delete(`/${resource}/${params.id}`);
      return { data: response.data };
    } catch (error) {
      console.error(`Erreur lors de la suppression d'un ${resource}:`, error);
      throw error;
    }
  },
};

export default dataProvider;
