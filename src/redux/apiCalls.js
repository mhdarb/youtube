import { publicRequest } from "../requestMethods";
import { getProductFailure, getProductStart, getProductSuccess } from "./productRedux";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"
import { deleteProductFailure, deleteProductStart, deleteProductSuccess,updateProductStart,updateProductSuccess,updateProductFailure,addProductStart,addProductFailure,addProductSuccess } from "./productRedux"
import { userRequest } from "../requestMethods";


 
export const login = async(dispatch,user)=>{
    dispatch(loginStart());
    try{
        const res= await publicRequest.post("/auth/login",user)
        dispatch(loginSuccess(res.data))
    }catch(err){
        dispatch(loginFailure())
    }
}

export const getProducts = async(dispatch,user)=>{
    dispatch(getProductStart());
    try{
        const res= await userRequest.get("/products")
        dispatch(getProductSuccess(res.data));
    }catch(err){
        dispatch(getProductFailure())
    }
}

export const deleteProduct = async(id,dispatch)=>{
    dispatch(deleteProductStart());
    try{
        // const res= await publicRequest.delete(`/products/${id}`)
        dispatch(deleteProductSuccess(id));
    }catch(err){
        dispatch(deleteProductFailure())
    }
}

export const updateProduct = async (id, product, dispatch) => {
    dispatch(updateProductStart());
    try {
      // update
      dispatch(updateProductSuccess({ id, product }));
    } catch (err) {
      dispatch(updateProductFailure());
    }
  };


  export const addProduct = async (product, dispatch) => {
    dispatch(addProductStart());
    try {
      const res = await userRequest.post(`/products`, product);
      dispatch(addProductSuccess(res.data));
    } catch (err) {
      dispatch(addProductFailure());
    }
  };
