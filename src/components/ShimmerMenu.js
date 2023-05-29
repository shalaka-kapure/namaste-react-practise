import { Skeleton } from "@mui/material";
import { Stack, Box } from "@mui/system";
import React from "react";

function ShimmerMenu() {
  return (
    <div>
      <div className="flex flex-col bg-gray-200 h-[90vh]">
        <div className="flex flex-col w-[80%] md:w-2/3 p-4 border m-auto">
          <div className="flex flex-col justify-between pb-4 border-b md:flex-row gap-3"></div>
          <Stack display="flex" spacing={3}>
            <Box>
              <Skeleton variant="rectangular" width={210} height={118} />
              <Skeleton width="10%" />
              <Skeleton width="20%" />
            </Box>
            <Box>
              <Skeleton width="10%" />
              <Skeleton width="60%" />
            </Box>
            <Box>
              <Skeleton width="10%" />
              <Skeleton width="60%" />
            </Box>
            <Box>
              <Skeleton width="10%" />
              <Skeleton width="60%" />
            </Box>
            <Box>
              <Skeleton width="10%" />
              <Skeleton width="60%" />
            </Box>
            <Box>
              <Skeleton width="10%" />
              <Skeleton width="60%" />
            </Box>
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default ShimmerMenu;
