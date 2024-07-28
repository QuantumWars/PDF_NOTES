import { useMutation } from "convex/react";
import type {
  DefaultFunctionArgs,
  FunctionReference,
  OptionalRestArgs,
} from "convex/server";
import { useState } from "react";

export const useApiMutation = (mutationFunciton:any) => {
  const [pending,setPending] = useState(false);
  const apiMutation = useMutation(mutationFunciton);

  const mutate = (payload: any) => {
    setPending(true);
    return apiMutation(payload).finally(() => setPending(false)).then((result) => {
      return result;
    }).catch ((error) => {
      throw error;
    });
  };
  return {
    mutate,
    pending,
  };
};
