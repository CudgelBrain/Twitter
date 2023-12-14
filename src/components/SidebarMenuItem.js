export default function SidebarMenuItem({ text, Icon ,active}) {
  return (
    <div className="flex items-center justify-center xl:justify-start text-lg space-x-3 text-gray-700 hoverEffect">
      <Icon className="h-8"/>
      <span className={`${active && "font-bold"} hidden xl:inline`}>{text}</span>
    </div>
  );
}
