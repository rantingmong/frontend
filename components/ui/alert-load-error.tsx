import { Alert, AlertDescription, AlertTitle } from "./alert";
import { Button } from "./button";

export function AlertLoadError({ title, onTryAgain }: AlertLoadErrorProps) {
  return (
    <Alert variant="destructive">
      <AlertTitle>{title} fetch failed</AlertTitle>
      <AlertDescription>
        Check your internet connection and try again.
      </AlertDescription>
      <Button className="mt-2" size="sm" variant="outline" onClick={onTryAgain}>
        Try Again
      </Button>
    </Alert>
  );
}

type AlertLoadErrorProps = {
  title: string;
  onTryAgain(): void;
};
