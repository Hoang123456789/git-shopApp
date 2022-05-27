import axiosClient  from "./axiosClient";


console.log(axiosClient);
const productApi={
    getAll(){
        const url='/product'
      //  console.log(axiosClient.get(url))
        return axiosClient.get(url)

    }
}
export default productApi 