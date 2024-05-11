import getApi from "../../utils/getApi.JS";





const dataProvider = {
 
  getList: async (resource, params) => {
    const api = getApi();
    let response;
    try {
      if (resource !== 'work') {
        response = await api.get(`/${resource}`);
        return { data: response.data, total: response.data.length };
      }else if (resource === 'work') {
        if (params.filter) {
          if (params.filter.labelId) {
            response = await api.get(`/work/byLabel/${params.filter.labelId}`);
          } else if (params.filter.title && params.filter.title.trim().length > 0) {
            const encodedTitle = encodeURIComponent(params.filter.title.trim());
            response = await api.get(`/work/byTitle?title=${encodedTitle}`);
            return { data: response.data.data, total: response.data.total }; 
          } else {
            response = await api.get(`${resource}/`);
          }
        } else {
          response = await api.get(`/work`);
        }
      } else {
        response = await api.get(`/${resource}`);
      }
      return { data: response.data, total: response.data.length};
    } catch (error) {
      console.error(`Erreur lors de la récupération des ${resource}:`, error);
      throw error;
    }
  },

  
  getOne: async (resource, params) => {
    const api = getApi();
    try {
      const response = await api.get(`/${resource}/${params.id}`);
      return { data: response.data };
    } catch (error) {
      console.error(`Erreur lors de la récupération de l'élément ${resource}:`, error);
      throw error;
    }
  },

  create: async (resource, params) => {
    const api = getApi(true);
    let url = `/${resource}/add${resource.charAt(0).toUpperCase() + resource.slice(1)}`;
  
    try {
      const formData = new FormData();
      Object.keys(params.data).forEach(key => {
        // Vérifiez si le champ est 'picture', qu'il existe et qu'il contient un fichier
        console.log(Object.keys(params.data));
        console.log('Params data:', params.data);

        if (key === 'picture') {
          const picture = params.data[key];
          if (picture && picture.rawFile instanceof File) {
         
            formData.append('picture', picture.rawFile);
            console.log('Appending file:', picture.rawFile);
          }
        } else {
          // Ajouter d'autres champs
          formData.append(key, params.data[key]);
          console.log(`Appending ${key}:`, params.data[key]);
        }
      });
  console.log("***Requete****:", url,formData);
      const response = await api.post(url, formData,{ withCredentials: true });
      return { data: response.data };
    } catch (error) {
      console.error(`Erreur lors de la création d'un ${resource}:`, error);
      throw error;
    }
  },
  
  
  

  update: async (resource, params) => {
    const api = getApi(true);
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
    const api = getApi(true);
    console.log(`Tentative de suppression de la ressource '${resource}' avec l'ID`, params.id);
    try {
      const response = await api.delete(`/${resource}/${params.id}`);
      console.log(`Réponse après suppression de la ressource '${resource}' avec l'ID ${params.id}:`, response);
      return { data: response.data };
    } catch (error) {
      console.error(`Erreur lors de la suppression de la ressource '${resource}' avec l'ID ${params.id}:`, error);
      throw error;
    }
  },
  
};

export default dataProvider;
