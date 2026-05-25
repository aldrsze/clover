import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Wrench,
  Database,
} from "lucide-react";
import { Button } from "../../../../components/common/Button/Button";

export const AdminSidebar = ({ setActiveTab, activeTab }) => {
  const navItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Products", icon: Package },
    { name: "Orders", icon: ShoppingCart },
    { name: "Customers", icon: Users },
    { name: "Utilities", icon: Wrench },
  ];

  return (
    <div className="admin-sidebar">
      <div className="admin-sidebar-header">
        <img
          src="/images/brand/clover-logo.png"
          alt="Clover Logo"
          className="admin-sidebar-logo"
        />
        <span>Clover Admin</span>
      </div>

      <div className="admin-sidebar-content">
        <nav className="admin-sidebar-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.name}
                variant="admin-secondary"
                className={`nav-item ${activeTab === item.name ? "is-active" : ""}`}
                onClick={() => setActiveTab(item.name)}
              >
                <Icon strokeWidth={2} />
                <span>{item.name}</span>
              </Button>
            );
          })}
        </nav>

        <div className="admin-sidebar-footer">
          <div className="system-health">
            <div className="health-item">
              <div className="health-label">
                <Database size={12} />
                <span>Database</span>
              </div>
              <span className="health-status status-ok">Connected</span>
            </div>
          </div>

          <div className="footer-meta">
            <div className="meta-links">
              <a href="#" className="meta-link">
                Help
              </a>
              <a href="#" className="meta-link">
                Docs
              </a>
            </div>
            <span className="version">Build v1.0.4 - Production</span>
          </div>
        </div>
      </div>
    </div>
  );
};
