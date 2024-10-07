import { useCreateMyRestaurant, useGetMyRestaurant, useUpdateMyRestaurant } from "@/api/MyRestaurantApi"
import ManagaeRestaurantForm from "@/forms/manage-restaurant-form/ManagaeRestaurantForm"


const ManageRestaurantPage = () => {
    const {createRestaurant, isLoading: isCreateLoading} = useCreateMyRestaurant();
    const {restaurant} = useGetMyRestaurant();
    const {updateRestaurant, isLoading: isUpdateLoading} = useUpdateMyRestaurant();

    const isEditing = !!restaurant;

    return (
        <div>
            <ManagaeRestaurantForm
                restaurant={restaurant}
                onSave={ isEditing ? updateRestaurant : createRestaurant}
                isLoading={isCreateLoading || isUpdateLoading}
            />
        </div>
    )
}

export default ManageRestaurantPage
