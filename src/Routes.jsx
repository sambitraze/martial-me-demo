import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Year = React.lazy(() => import("pages/Year"));
const Navbar = React.lazy(() => import("pages/Navbar"));
const ContactInfoForm = React.lazy(() => import("pages/ContactInfoForm"));
const AnalyticsvTwo = React.lazy(() => import("pages/AnalyticsvTwo"));
const MembershipsThree = React.lazy(() => import("pages/MembershipsThree"));
const Day = React.lazy(() => import("pages/Day"));
const EmailPreviewPage = React.lazy(() => import("pages/EmailPreviewPage"));
const StudentListPage = React.lazy(() => import("pages/StudentListPage"));
const MembershipsTwo = React.lazy(() => import("pages/MembershipsTwo"));
const Forms = React.lazy(() => import("pages/Forms"));
const AddNewInvoice = React.lazy(() => import("pages/AddNewInvoice"));
const Week = React.lazy(() => import("pages/Week"));
const Analytics = React.lazy(() => import("pages/Analytics"));
const NewContactForm = React.lazy(() => import("pages/NewContactForm"));
const ComposeEmail = React.lazy(() => import("pages/ComposeEmail"));
const MembershipsOne = React.lazy(() => import("pages/MembershipsOne"));
const InvoiceDetail = React.lazy(() => import("pages/InvoiceDetail"));
const BlankPageOne = React.lazy(() => import("pages/BlankPageOne"));
const Calendar1 = React.lazy(() => import("pages/Calendar1"));
const ProjectDetail = React.lazy(() => import("pages/ProjectDetail"));
const ChatMessaging = React.lazy(() => import("pages/ChatMessaging"));
const NotificationLatestActivityvTwo = React.lazy(() =>
  import("pages/NotificationLatestActivityvTwo"),
);
const Memberships = React.lazy(() => import("pages/Memberships"));
const Preferences = React.lazy(() => import("pages/Preferences"));
const Invoices = React.lazy(() => import("pages/Invoices"));
const NotificationLatestActivity = React.lazy(() =>
  import("pages/NotificationLatestActivity"),
);
const ContactPage = React.lazy(() => import("pages/ContactPage"));
const ChatDiscussions = React.lazy(() => import("pages/ChatDiscussions"));
const Profile = React.lazy(() => import("pages/Profile"));
const Calendar = React.lazy(() => import("pages/Calendar"));
const BoardPage = React.lazy(() => import("pages/BoardPage"));
const EmailPage = React.lazy(() => import("pages/EmailPage"));
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const BlankPage = React.lazy(() => import("pages/BlankPage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/blankpage" element={<BlankPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/emailpage" element={<EmailPage />} />
          <Route path="/boardpage" element={<BoardPage />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chatdiscussions" element={<ChatDiscussions />} />
          <Route path="/contactpage" element={<ContactPage />} />
          <Route
            path="/notificationlatestactivity"
            element={<NotificationLatestActivity />}
          />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/preferences" element={<Preferences />} />
          <Route path="/memberships" element={<Memberships />} />
          <Route
            path="/notificationlatestactivityvtwo"
            element={<NotificationLatestActivityvTwo />}
          />
          <Route path="/chatmessaging" element={<ChatMessaging />} />
          <Route path="/projectdetail" element={<ProjectDetail />} />
          <Route path="/calendar1" element={<Calendar1 />} />
          <Route path="/blankpageone" element={<BlankPageOne />} />
          <Route path="/invoicedetail" element={<InvoiceDetail />} />
          <Route path="/membershipsone" element={<MembershipsOne />} />
          <Route path="/composeemail" element={<ComposeEmail />} />
          <Route path="/newcontactform" element={<NewContactForm />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/week" element={<Week />} />
          <Route path="/addnewinvoice" element={<AddNewInvoice />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/membershipstwo" element={<MembershipsTwo />} />
          <Route path="/studentlistpage" element={<StudentListPage />} />
          <Route path="/emailpreviewpage" element={<EmailPreviewPage />} />
          <Route path="/day" element={<Day />} />
          <Route path="/membershipsthree" element={<MembershipsThree />} />
          <Route path="/analyticsvtwo" element={<AnalyticsvTwo />} />
          <Route path="/contactinfoform" element={<ContactInfoForm />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/year" element={<Year />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
