export interface Events extends EventsData {
    title: string;
    description: string;
    bandsintown_plus: boolean;
}




export interface EventsData{
    id: string;
    url: string;
    datetime: string;
    on_sale_datetime: string;
    lineup: Array<string>;
    artistId: string;
    venue: VenueData,
    offers: Array<OfferData>;
    artist: ArtistData
}

export interface OfferData{
    status: string;
    type: string;
    url: string;
}

export interface VenueData{
    name: string;
    latitude: string;
    longitude: string;
    city: string;
    country: string;
    region: string;

    location?: string;

}

export interface ArtistData{
    image_url: string;
    thumb_url: string;
    facebook_page_url: string;
    tracker_count: number;
    upcoming_event_count: number;
    url: string;
    mbid: string;
    name: string;

    id?: string;
    options? : {
        display_listen_unit : boolean
    },
    support_url?: string;
}