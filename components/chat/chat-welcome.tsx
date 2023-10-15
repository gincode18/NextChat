import { Hash } from "lucide-react";

interface ChatWelcomeProps {
  name: string;
  type: "channel" | "conversation";
};

export const ChatWelcome = ({
  name,
  type
}: ChatWelcomeProps) => {
  return (
    <div className="space-y-2 px-4 mb-4">
      {type === "channel" && (
        <div className="h-[75px] w-[75px] rounded-full bg-primary flex items-center justify-center">
          <Hash className="h-12 w-12  text-secondary" />
        </div>
      )}
      <p className="text-xl md:text-3xl font-bold bg-gradient-to-r from-primary  to-secondary bg-clip-text text-transparent">
        {type === "channel" ? "Welcome to #" : ""}{name}
      </p>
      <p className="text-zinc-600 dark:text-zinc-400 text-sm">
        {type === "channel"
          ? `This is the start of the #${name} channel.`
          : `This is the start of your conversation with ${name}`
        }
      </p>
    </div>
  )
}