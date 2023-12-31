import { useQuery, useQueryClient } from "@tanstack/react-query";

const queryClient = useQueryClient()

const query = useQuery({queryKey: ['']})