const StrapiClient = () => {
      const fetchData = async (path) => {
            const requestURL = `${process.env.STRAPI_API_URL}${path}`;
            const response = await fetch(requestURL);
            const data = response.json();
            return data;
      };

      return fetchData;
};

export default StrapiClient;
