import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0B0F1A',
          backgroundImage: 'radial-gradient(circle at 50% 30%, rgba(212, 175, 55, 0.08) 0%, transparent 50%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 40,
            }}
          >
            <svg
              width="100"
              height="100"
              viewBox="0 0 60 60"
              fill="none"
            >
              <circle cx="30" cy="30" r="28" stroke="#D4AF37" strokeWidth="1" opacity="0.3" />
              <path
                d="M30 10C30 10 20 25 20 38C20 44 24.5 48 30 48C35.5 48 40 44 40 38C40 25 30 10 30 10Z"
                stroke="#D4AF37"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <circle cx="30" cy="36" r="6" fill="#D4AF37" />
            </svg>
          </div>

          <div
            style={{
              display: 'flex',
              fontSize: 80,
              fontWeight: 900,
              letterSpacing: '-0.02em',
              marginBottom: 16,
            }}
          >
            <span style={{ color: '#F1F5F9' }}>LIGHT</span>
            <span
              style={{
                background: 'linear-gradient(135deg, #D4AF37 0%, #F0D060 50%, #D4AF37 100%)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              UP
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              fontSize: 16,
              letterSpacing: '0.3em',
              color: '#D4AF37',
              opacity: 0.6,
              marginBottom: 50,
              textTransform: 'uppercase',
            }}
          >
            IGNITE YOUR IDENTITY
          </div>

          <div
            style={{
              display: 'flex',
              fontSize: 32,
              color: '#94A3B8',
              textAlign: 'center',
            }}
          >
            מאירים את הדרך בזהות וערכים משותפים
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 30,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            color: '#64748B',
            fontSize: 14,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: '#D4AF37',
            }}
          />
          lightup.community
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
