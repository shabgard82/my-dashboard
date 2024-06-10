import { QueryClient, useMutation } from "@tanstack/react-query";
import { deleteCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

function useDeleteCabin() {
  const { isLoading: isDeleting, mutate: DeleteCabin } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      toast.success("cabin successfully deleted");
      QueryClient.invalidateQueries({
        queryKey: ["cabin"],
      });
    },
    onError: (err) => toast.error(err.messagr),
  });
  return { isDeleting, DeleteCabin };
}
export default useDeleteCabin;
