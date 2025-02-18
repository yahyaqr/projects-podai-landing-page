import {
    ScaleIcon,
    BookOpenIcon,
    TreesIcon,
    BriefcaseIcon,
    GavelIcon
} from 'lucide-vue-next';

export const categories = [
    { id: 1, name: 'Criminal Law', icon: ScaleIcon },
    { id: 2, name: 'Intellectual Property Law', icon: BookOpenIcon },
    { id: 3, name: 'Environmental Law', icon: TreesIcon },
    { id: 4, name: 'Labor Law', icon: BriefcaseIcon },
    { id: 5, name: 'Civil Law', icon: GavelIcon },
];

export const courses = [
    { id: 1, title: 'Corruption Case Study: The Jakarta Infrastructure Project', duration: '10 hours', type: 'Pre-recorded', price: '79.000', color: '#DC2626', categoryId: 1 },
    { id: 2, title: 'Intellectual Property Dispute: Traditional Knowledge vs. Modern Patents', duration: '2 hours', type: 'Upcoming', price: '79.000', color: '#2563EB', categoryId: 2 },
    { id: 3, title: 'Environmental Law Case: The Borneo Deforestation Lawsuit', duration: '2 hours', type: 'Pre-recorded', price: '79.000', color: '#16A34A', categoryId: 3 },
    { id: 4, title: "Labor Law Dispute: Gig Economy Workers' Rights", duration: '2 hours', type: 'Pre-recorded', price: '79.000', color: '#B45309', categoryId: 4 },
    { id: 5, title: 'Cybercrime Investigation: The Jakarta Financial Hack', duration: '2 hours', type: 'Pre-recorded', price: '79.000', color: '#7C3AED', categoryId: 1 },
    { id: 6, title: 'Indonesian Contract Law: Principles and Practice', duration: '4 weeks', type: 'Class', price: '179.000', color: '#16A34A', categoryId: 5 }
]