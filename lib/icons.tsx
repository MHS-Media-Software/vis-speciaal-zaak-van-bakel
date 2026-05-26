import {
  ArrowLeft, ArrowRight, Award, BarChart, Briefcase, Check, CheckCircle, ChevronDown, ClipboardCheck, Clock, Crown,
  Euro, Facebook, Globe, Handshake, Heart, HelpCircle, Instagram, Layers, Lightbulb, List,
  Mail, MapPin, Menu, MessageCircle, Phone, Plus, Rocket, Settings, Shield, Sparkles, Star, Tag, Target,
  TrendingUp, Users, X, Youtube, Zap,
} from "lucide-react";

const ICON_MAP = {
  Shield, CheckCircle, Users, Phone, List, ClipboardCheck, Handshake, Target,
  Award, Zap, Heart, Star, TrendingUp, Lightbulb, Settings, Globe, BarChart,
  Clock, Layers, Briefcase, Check, Euro, Tag, Crown, Sparkles, Rocket,
};

export function DynamicIcon({ name, className, style }) {
  const Icon = ICON_MAP[name] || Shield;
  return <Icon className={className} style={style} />;
}

export {
  ArrowLeft, ArrowRight, Award, BarChart, Briefcase, Check, CheckCircle, ChevronDown, ClipboardCheck, Clock, Crown,
  Euro, Facebook, Globe, Handshake, Heart, HelpCircle, Instagram, Layers, Lightbulb, List,
  Mail, MapPin, Menu, MessageCircle, Phone, Plus, Rocket, Settings, Shield, Sparkles, Star, Tag, Target,
  TrendingUp, Users, X, Youtube, Zap,
};
