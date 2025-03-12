import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    name: 'Facebook',
    icon: Facebook,
    url: 'https://www.facebook.com/bti.bangalore.315',
    color: 'hover:text-blue-600',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://instagram.com/bticollege',
    color: 'hover:text-pink-600',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/bti-bangalore-b224081b4',
    color: 'hover:text-blue-700',
  },
  {
    name: 'Twitter',
    icon: Twitter,
    url: 'https://twitter.com/your_twitter_handle"',
    color: 'hover:text-blue-400',
  },
  {
    name: 'Youtube',
    icon: Youtube,
    url: 'https://www.youtube.com/BTI',
    color: 'hover:text-red-600',
  },
];

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  variant?: 'default' | 'light';
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  className = '',
  iconSize = 24,
  variant = 'default',
}) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className={`flex items-center gap-6 ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {socialLinks.map((social) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`transition-transform duration-200 hover:scale-110 ${social.color} ${
            variant === 'light' ? 'text-white/80 hover:text-white' : 'text-gray-600'
          }`}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label={`Follow us on ${social.name}`}
        >
          <social.icon size={iconSize} />
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLinks; 