"use client";

import { Hint } from "@/components/hint";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
import { Plus } from "lucide-react";

export function NewButton() {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="aspect-square">
          <Hint 
          label="Create organization"
          side="right"
          align="start"
          sideOffset={18}
          >
          {/* <button className="bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-60"> */}
              <Plus className="bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-60" />
            {/* </button> */}
            </Hint>
        </div>
      </DialogTrigger>
      <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
      <CreateOrganization path="/documents" />      
      </DialogContent>
    </Dialog>
  );
}