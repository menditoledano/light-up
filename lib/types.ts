export interface LightupSpark {
  id: string;
  title: string;
  category: string;
  read_time: string;
  is_highlight: boolean;
  sort_order: number;
  created_at: string;
}

export interface LightupEvent {
  id: string;
  title: string;
  event_day: string;
  event_month: string;
  location: string;
  event_type: string;
  is_special: boolean;
  sort_order: number;
  created_at: string;
}

export interface LightupGalleryItem {
  id: string;
  title: string;
  date_label: string;
  placeholder_text: string;
  image_url: string | null;
  sort_order: number;
  created_at: string;
}
