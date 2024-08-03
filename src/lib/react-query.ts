import { QueryClient } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { toast } from "sonner";

let displayedNetworkFailureError = false

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      
      retry(failureCount) {
        if (failureCount < 3) return true;
        if (displayedNetworkFailureError) return false;
        displayedNetworkFailureError = true

        toast.error('A aplicação está demorando mais que o esperado para carregar', {
          onDismiss: () => displayedNetworkFailureError = false
        });
        return false;
      }
    },
    
    mutations: {
      onError(error) {
        if (!isAxiosError(error)) return;
        toast.error(error.response?.data?.message || 'Erro ao processar operação');
      }
    }
  }
})