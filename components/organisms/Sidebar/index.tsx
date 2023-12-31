import FooterSidebar from '../FooterSidebar';
import SidebarMenu from './SidebarMenu';

interface ActiveMenuProps {
  activeMenu:
    | 'overview'
    | 'transactions'
    | 'messages'
    | 'card'
    | 'rewards'
    | 'settings'
    | 'logout';
}
export default function Sidebar(props: ActiveMenuProps) {
  const { activeMenu } = props;
  return (
    <>
      <div className="menus">
        <SidebarMenu
          icon="ic-overview"
          title="Overview"
          link="/member/overview"
          active={activeMenu === 'overview'}
        />
        <SidebarMenu
          icon="ic-transaction"
          title="Transactions"
          link="/member/transactions"
          active={activeMenu === 'transactions'}
        />
        <SidebarMenu
          icon="ic-message"
          title="Messages"
          link="/member/messages"
          active={activeMenu === 'messages'}
        />
        <SidebarMenu
          icon="ic-card"
          title="Card"
          link="/member/card"
          active={activeMenu === 'card'}
        />
        <SidebarMenu
          icon="ic-reward"
          title="Rewards"
          link="/member/rewards"
          active={activeMenu === 'rewards'}
        />
        <SidebarMenu
          icon="ic-setting"
          title="Settings"
          link="/member/edit-profile"
          active={activeMenu === 'settings'}
        />
        <SidebarMenu
          icon="ic-logout"
          title="Logout"
          link="/sign-in"
          active={activeMenu === 'logout'}
        />
      </div>
      <FooterSidebar />
    </>
  );
}
