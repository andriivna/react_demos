import {carServices} from "../../services";

import {useForm} from "react-hook-form";


const CarForm=({setCars})=>{
    const {handleSubmit, register, reset, formState:{errors, isValid}, setValue} = useForm({mode: "all"});
    const submit = async (car) =>{
        const {data} = await carServices.create(car);
        setCars(cars =>[...cars,data])
        reset()
    }
    return(
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type='text' placeholder={'model'} {...register("name", {required:true, minLength:{value:2, message:'min 2 ch'}})}/>
                {errors.name&&<span>{errors.name.message}</span>}
                <input type='text' placeholder={'price'}{...register('price')}/>
                <input type='text' placeholder={'year'}{...register('year')}/>
                <button disabled={!isValid}>Save</button>
            </form>
        </div>
    )
}
export {CarForm};