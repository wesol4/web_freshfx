@@ .. @@
-import { ABOUT_IMAGE, ABOUT_TEXT, SKILLS, EMAIL, PHONE} from '../constants.tsx';
+import { ABOUT_IMAGE, ABOUT_TEXT, EMAIL, PHONE} from '../data/constants';
+import { SKILLS } from '../data/skills';
 import { FaEnvelope, FaPhone } from 'react-icons/fa'; // ← Dodany import
-import { SiArtstation, SiLinkedin } from 'react-icons/si';
-import { FaFilePdf } from 'react-icons/fa';
+import { formatPhone } from '../utils/formatPhone';
 
-const About: React.FC = () => {
+const AboutDetails: React.FC = () => {
   return (
@@ .. @@
                     <a
-                        href={`tel:${PHONE.replace(/\s+/g, '')}`}
+                        href={`tel:${formatPhone(PHONE)}`}
                         className="text-blue-400 hover:underline"
@@ .. @@
-export default About;
+export default AboutDetails;