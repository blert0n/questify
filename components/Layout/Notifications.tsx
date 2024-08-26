import {
  useNotificationsSubscription,
  useReadAllNotificationsMutation,
  useReadNotificationMutation,
} from "@/lib/graphql";
import { useAuth } from "@clerk/nextjs";
import { Mail } from "lucide-react";
import { useBoolean } from "usehooks-ts";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { Separator } from "../ui";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
dayjs.extend(relativeTime);
dayjs.extend(timezone);
dayjs.extend(utc);

const Notifications = () => {
  const { userId } = useAuth();
  const { data: { Notification } = {} } = useNotificationsSubscription({
    variables: {
      ownerId: userId ?? "",
    },
    skip: !userId,
  });
  const [markAsRead] = useReadNotificationMutation();
  const [markAllAsRead] = useReadAllNotificationsMutation({
    variables: {
      ownerId: userId ?? "",
    },
  });
  const {
    value: isNotificationsPopoverOpen,
    toggle: toggleNotificationsPopover,
  } = useBoolean(false);

  const unreadNotifications = (Notification ?? []).filter(
    (notification) => !notification.read
  ).length;

  const getNotificationTime = (date: Date) => {
    const localCreatedAt = dayjs.utc(date).tz(dayjs.tz.guess());
    return dayjs().to(localCreatedAt);
  };

  return (
    <Popover
      open={isNotificationsPopoverOpen}
      onOpenChange={toggleNotificationsPopover}
    >
      <PopoverTrigger asChild>
        <div className="relative inline-flex">
          <button
            className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-full text-xs bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            type="button"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <Mail size={16} />
            </span>
          </button>
          {unreadNotifications > 0 && (
            <span className="absolute rounded-full py-1 px-1 text-xs font-medium content-[''] leading-none grid place-items-center top-[4%] right-[2%] translate-x-2/4 -translate-y-2/4 bg-red-500 text-white min-w-[24px] min-h-[24px]">
              {unreadNotifications}
            </span>
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-96 p-0 m-4 mt-2">
        <div className="flex flex-col">
          <div className="flex justify-between p-4 pb-2">
            <div className="text-slate-400 text-xs">Notifications</div>
            <div
              className="text-blue-500 text-xs cursor-pointer focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85]"
              onClick={() => {
                markAllAsRead();
              }}
            >
              Mark all as read
            </div>
          </div>
          <div className="flex flex-col mb-2">
            {Notification?.map((notification) => (
              <>
                <div
                  key={notification.id}
                  className={cn(
                    "flex flex-col gap-1 p-2 cursor-pointer",
                    !notification.read && "bg-red-500 bg-opacity-[0.02]"
                  )}
                  onClick={() => {
                    markAsRead({
                      variables: {
                        id: notification.id,
                      },
                    });
                  }}
                >
                  <div className="flex gap-4 items-center">
                    <span
                      className={cn(
                        "w-[4px] h-[4px] min-w-[4px] min-h-[4px] py-1 px-1",
                        !notification.read && "rounded-full bg-red-400"
                      )}
                    ></span>
                    <div className="text-sm">
                      <span className="text-slate-500">
                        A new response has been submitted on form:{" "}
                      </span>
                      {notification.description}
                    </div>
                  </div>
                  <div className="pl-[24px] text-sm text-slate-400">
                    {getNotificationTime(notification.createdAt)}
                  </div>
                </div>
                <Separator />
              </>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Notifications;
