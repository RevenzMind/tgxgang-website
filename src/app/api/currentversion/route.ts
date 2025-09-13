import { NextResponse } from 'next/server';

interface VersionResponse {
    windows: string; 
}

export async function GET() {
    const robloxversion = "https://clientsettings.roblox.com/v2/client-version/WindowsPlayer/channel/LIVE";

    const response = await fetch(robloxversion);
    const data = await response.json();

    const versionResponse: VersionResponse = {
        windows: data.clientVersionUpload,
    };

    return NextResponse.json(versionResponse);
}