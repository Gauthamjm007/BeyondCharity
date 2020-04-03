//Look at https://github.com/mui-org/material-ui/blob/master/docs/src/pages/components/material-icons/SearchIcons.js
import React from "react";
import { PageTitle } from "../../components";

export default function SearchIcons() {
  const isMounted = React.useRef(false);
  React.useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <div>
      <PageTitle title="Add  Events" />
    </div>
  );
}
