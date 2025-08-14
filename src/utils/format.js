export function formatLocalTime(unixSeconds, tzOffsetSeconds, opts = {}) {
    const ms = (unixSeconds + tzOffsetSeconds) * 1000;

    return new Intl.DateTimeFormat ("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        ...opts,
    }).format(ms)
}