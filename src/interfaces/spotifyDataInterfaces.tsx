export interface Album {
    name: string
}

export interface ExternalUrls {
    spotify: string;
}

export interface Artist {
    external_urls?: ExternalUrls;
    href?: string;
    id: string;
    name: string;
    type?: string;
    uri?: string;
}


export interface ExternalUrls2 {
    spotify: string;
}

export interface Image {
    height?: number;
    url: string;
    width?: number;
}

export interface Album {
    album_group?: string;
    album_type?: string;
    artists: Artist[];
    available_markets?: string[];
    external_urls?: ExternalUrls2;
    href?: string;
    id: string;
    images: Image[];
    name: string;
    release_date?: string;
    release_date_precision?: string;
    total_tracks?: number;
    type?: string;
    uri?: string;
    tracks?: Track[]
}

export interface Track {
    artists: Artist[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_urls: ExternalUrls2;
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
}

export interface RootObject {
    href: string;
    items: Album[];
    limit: number;
    next: string;
    offset: number;
    previous?: any;
    total: number;
}

